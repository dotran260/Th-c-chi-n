import { useState, useEffect } from "react";
const types = ["posts", "comments", "albums"];
function Content() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("posts");
    const [tab, setTab] = useState([]);
    const [goToTop, setGoToTop] = useState(false);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((response) => response.json())
            .then((json) => setTab(json));
    }, [type]);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 85) {
                setGoToTop(true)
            } else {
                setGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="wrapper">
            <input
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            {types.map((item, index) => (
                <button
                    style={type === item ? { color: "#fff", backgroundColor: "#333" } : {}}
                    key={index}
                    onClick={(e) => setType(e.target.innerText)}>
                    {item}
                </button>
            ))}
            <ul>
                {tab.map(item => <li key={item.id}>{item.title || item.name}</li>)}
            </ul>
            {goToTop && <button style={{ position: "fixed", right: "10px", bottom: "10px" }}>Go To Top</button>}
        </div>
    );
}

export default Content;
