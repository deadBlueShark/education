import { createStore } from "redux"
import { Provider } from "react-redux"

import 'semantic-ui-css/semantic.min.css'
import ProductList from './components/ProductList'

import ProductListV2 from './redux-ver/components/ProductListV2'
import productReducers from "./redux-ver/reducers"

const productStore = createStore(productReducers)

function App() {
  return (
    <>
      <ProductList />
      <Provider store={productStore}><ProductListV2 /></Provider>
    </>
  )
}

export default App
