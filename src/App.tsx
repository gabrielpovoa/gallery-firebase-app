import React, { FormEvent, useEffect, useState } from 'react';

import * as Photos from './services/photos'

import { Photo } from './types/photo';
import { PhotoItem } from './components/PhotoItem';

import { Container, Area, Header, ScreenWarning, PhotoList, UploadForm } from './App.styles';




const App = () => {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)
      setPhotos(await Photos.getAll())
      setLoading(false)
    }
    getPhotos()
  }, [])

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if(file && file.size > 0) {
      setUploading(true)
      // Enviamos o arquivo aqui
      let result = await Photos.insert(file)
      setUploading(false)

      if(result instanceof Error) {
        alert(`${result.name} ${result.message}`)
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }
    }
  }


  return (
    <Container>
      <Area>
        <Header>Gallery</Header>

        <UploadForm method="post" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="send" />
          {uploading && 
            "Uploading..."
          }
        </UploadForm>

        {loading &&
          <ScreenWarning>
            <div className='emoji'>🖐🏻</div>
            <div className='loading'>Loading...</div>
          </ScreenWarning>
        }

        {!loading && photos.length > 0 &&
          <PhotoList>
            {photos.map((item, index) => (
              <PhotoItem
                key={index}
                url={item.url}
                name={item.name}
              />
            ))}
          </PhotoList>
        }

        {!loading && photos.length === 0 &&
          <ScreenWarning>
            <div className='emoji'>🦜</div>
            <div className='loading'>There's nothing to show here</div>
          </ScreenWarning>
        }
      </Area>
    </Container>
  );
}

export default App;
