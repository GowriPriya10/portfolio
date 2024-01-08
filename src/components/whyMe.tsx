'use client'

import { useEffect, useState } from "react";
import { whyMe } from '@/lib/constants';
import Accordion from "./accordian";

type keyHighlightProps = {
    id: number;
    isOpen: boolean;
    title: string;
    description: string;
}

export default function WhyMe() {
    const [keyHighlights, setKeyHighlights]: any = useState([]);
    const [mainSectionOpen, setMainSectionOpen] = useState(false);

    useEffect(() => {
        const result: keyHighlightProps[] = [];

        whyMe.map((keyHighlight, id) => {
            result.push({ ...keyHighlight, id, isOpen: false });
        })

        setKeyHighlights(result);
    }, [])

    const toggleAccordion = (id: any) => {
        const updatedKeyHightlights = keyHighlights.map((highlight: keyHighlightProps) => {
            if (highlight.id === id) {
                return { ...highlight, isOpen: !highlight.isOpen };
            } else {
                return { ...highlight, isOpen: false };
            }
        });

        setKeyHighlights(updatedKeyHightlights);
    };

    const mainSectionData = () => {
        return (<>
            {keyHighlights.map((highlight: any) => (
                <Accordion
                    key={highlight.id}
                    title={highlight.title}
                    data={highlight.description}
                    isOpen={highlight.isOpen}
                    toggleAccordion={() => toggleAccordion(highlight.id)}
                />
            ))}
        </>)
    }

    return (
        <div>
            <Accordion
                key={0}
                title={'Why Me?'}
                data={mainSectionData()}
                isOpen={mainSectionOpen}
                toggleAccordion={() => setMainSectionOpen(!mainSectionOpen)}
            />
        </div>
    )
}
