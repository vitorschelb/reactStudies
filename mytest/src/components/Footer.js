function Footer({logo, contato}) {
    return (
        <div className="container">
            <div className="logo">
                <p>Eu sou o {logo} do Footer</p>
            </div>
            <div className="contato">
                <p>Eu sou o {contato} do Footer</p>
            </div>
        </div>
    )
}

export default Footer