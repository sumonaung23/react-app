import {useState, useEffect} from 'react'

const WidthHeight = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log("Event Listner Added");

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log("Event Listener Removed.")
        }
    },[]);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }

    return (
        <div>
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </div>
    )
}

export default WidthHeight