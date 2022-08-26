import app from './app.js'
import { collection, addDoc, getDocs, getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellfireClub(subscription) {
    const database = getFirestore(app)
    const hellfireClubeCollection = collection(database, 'hellfire-clube')
    const docRef = await addDoc(hellfireClubeCollection, subscription)
    return docRef.id
}

// Get a list of datas from your database
export async function getHellfireClubeSubscriptions() {
    const database = getFirestore(app)
    const hellfireClubeCollection = collection(database, 'hellfire-clube')
    const hellfireClubeCollectionSnapshot = await getDocs(hellfireClubeCollection);
    const subscriptions = hellfireClubeCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}