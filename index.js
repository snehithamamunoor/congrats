const element = (
    <div className = bg-container>
        <h1 className = "heading">Congratulations</h1>
        <div className = "card">
            <img src = "https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
                className = "logo-image"/>
                <h1 className = "heading-1">Kiran V</h1>
                <p className = "card-description">Vishnu Institute of Computer Education and Technology,
                Bhimavaram</p>
                <img src = "https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
                    className = "logo-image"/>
        </div>
    </div>
  )
  
ReactDOM.render(element, document.getElementById('root'))