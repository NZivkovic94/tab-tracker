import Api from '@/services/Api'

export default (credentials) => {
  return Api().post('register', credentials)
}
