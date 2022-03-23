import React, { useEffect, useState } from 'react';
import { db } from '../firebase/FirebaseConfig'
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const Landing = () => {

    const filmsCollectionReference = collection(db, "films");

    const [name, setName] = useState("");
    const [producer, setProducer] = useState("");
    const [thisFilms, setThisFilms] = useState([]);
    const [newThisFilms, setNewThisFilms] = useState("");

    useEffect(() => {
        const getFilms = async () => {
            const data = await getDocs(filmsCollectionReference);
            setThisFilms(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            console.log(thisFilms);
        };
        getFilms();
    }, []);
    

    return (
        <div>
            {thisFilms.map((films) => {
                return (
                    <div>
                        <h1>Name: {films.name}</h1>
                        <h1>Producer: {films.producer}</h1>
                    </div>
                );
            })}
        </div>
    );
}

export default Landing;
