let globalConfig = (function(){
  let private = 'privateValue'
  let public = 'publicValue'
  let publicFunc = function(){
    return private
  }
  return {
    public, publicFunc
  }
})
export default globalConfig