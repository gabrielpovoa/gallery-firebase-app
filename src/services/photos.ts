import { v4 as createID } from 'uuid'
import { Photo } from "../types/photo";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage"

export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "images")
    const photoList = await listAll(imagesFolder)

    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i])

        list.push({
            name: photoList.items[i].name,
            url: photoUrl,
        })
    }

    return list
}

export const insert = async (file: File) => {
    if(['image/jpeg','image/png','image/jpg'].includes(file.type)) {
        let randomName = createID()
        let newFile = ref(storage, `images/${randomName}`)

        let upload = await uploadBytes(newFile, file)

        let photoURL = await getDownloadURL(upload.ref)

        return {
            name: upload.ref.name,
            url: photoURL
        } as Photo
    } else {
        return new Error("This kind of file isn't allowed")
    }
}