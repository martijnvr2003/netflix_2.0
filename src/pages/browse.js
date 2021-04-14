import React from 'react';
import { useContent } from '../hooks'; 
import useContext from '../hooks/use-content';

export default function Browse() {
    const { series } = useContext('series');
    const { films } = useContext('films');

    
    return <p>Hello from the browse!</p>;
}