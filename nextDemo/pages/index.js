import Link from 'next/link'
import Router from 'next/router'

function gotoPage(){
  Router.push('/page')
}
export default ()=>(
  <div>
    <div>index</div>
    <Link href='/'>
        <a>首页</a>
      </Link>
    <Link href='/page'>
        <a>Page</a>
      </Link>
      <button onClick={gotoPage}>goto page</button>
  </div>
)