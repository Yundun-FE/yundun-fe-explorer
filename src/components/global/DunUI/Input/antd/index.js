import Input from './Input'
import InputNumber from './InputNumber'

Input.install = Vue => {
  Vue.component(Input.name, Input)
  Vue.component(InputNumber.name, InputNumber)
}

export default Input
