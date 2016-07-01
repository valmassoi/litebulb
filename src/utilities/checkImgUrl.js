export default function (uri) {
  // make sure we remove any nasty GET params
  const splitUri = uri.split('?')[0]
  // moving on, split the uri into parts that had dots before them
  const parts = splitUri.split('.')
  // get the last part ( should be the extension )
  const extension = parts[parts.length - 1]
  // define some image types to test against
  const imageTypes = ['jpg', 'jpeg', 'tiff', 'png', 'gif', 'bmp']
  // check if the extension matches anything in the list.
  if (imageTypes.indexOf(extension) !== -1)
    return true
  return false
}
