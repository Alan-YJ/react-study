import Link from 'next/link'

export default ()=>(
  <div>
    <div>page</div>
    <Link href='/'>
        <a>首页</a>
    </Link>
    <Link href='/page'>
        <a>Page</a>
    </Link>
  </div>
)