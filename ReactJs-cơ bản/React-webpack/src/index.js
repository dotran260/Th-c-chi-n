import React from 'react' // nạp thư viện react
// import ReactDOM from 'react-dom' // nạp thư viện react-dom@17
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom@18

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
            <h1>Tôi là Đình Đô</h1>
        </div>
    )
}

// Render component App vào #root element
// React@17
// ReactDOM.render(<App />, document.getElementById('root'))

// React@18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)


