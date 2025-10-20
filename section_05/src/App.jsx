
import './App.css'
import Header from './components/header'
import Main from './components/Main'
import Footer from './components/Footer'

// vite 를 사용하면 뒤에 .jsx 를 안붙여도 자동으로 인식한다.

// 리액트의 컴포넌트는 무조건 대문자로 시작해야 한다.(아니라면 인정하지 않음)

// 부모 컨포넌트 == root 컨포넌트 == App 컨포넌트

// const 함수형 컴포넌트
// function 함수형 컴포넌트
// class 클래스형 컴포넌트 -> 잘 쓰지 않음


// function Header() {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   )
// }

// const Footer = () => {
//   return (
//     <footer>
//       <h1>footer</h1>
//     </footer>
//   )
// }

// 루트 컴포넌트, 관례적으로 App 이라고 쓰인다.
function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
