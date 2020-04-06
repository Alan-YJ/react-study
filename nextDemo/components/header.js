import Head from 'next/head'

function Header({children}){
    return(
        <Head>
            <title>{children}</title>
        </Head>
    )
}

export default Header