import'./Footer.css'

function Footer() {
    const companyName = 'iO Academy'
    
    return (
        <footer className='fancy-footer'>
            <p>Copyright 2024 {companyName}</p>
            
            <p>{companyName === 'iO Academy' ? 'Best company eva' : ''}</p>

            <p>{companyName === 'iO Academy' && 'Best company eva'}</p>
            <p>Other stuff {4 + 4}</p>
        </footer>
    )
}

export default Footer