
type props = {
    key: number,
    title: string,
    data: any,
    isOpen: boolean,
    toggleAccordion: any
}

export default function Accordion(props: props) {
    return (
        <div className="border rounded-md mb-2">
            <button
                className="w-full p-4 text-left text-blue-600/100 bg-white 
                            hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-400 
                            hover:text-white transition duration-300"
                onClick={props.toggleAccordion}
            >
                {props.title}
                <span className={`
                    text-xl text-black float-right transform 
                    ${props.isOpen ? 'rotate-180' : 'rotate-0'} 
                    transition-transform duration-300
                `}>
                    &#x002B;
                </span>
            </button>
            {props.isOpen && (
                <div className="p-4 bg-white">
                    {props.data}
                </div>
            )}
        </div>
    );
};
