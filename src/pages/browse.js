import React from 'react';
import { useContent } from '../hooks'; 
// import useContent from '../hooks/use-content';

export default function Browse() {
    const { series } = useContent('series');
    const { films } = useContent('films');

    
    return <p>Hello from the browse!</p>;
}