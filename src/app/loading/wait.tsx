import Image from 'next/image'

function aWait() {
  return new Promise(callback => { setTimeout(callback, 3000) })
}
export default async function WaitComponent() {
  await aWait()
  return(
    <div>
        Finished!
        <Image src="/image/art_1.jpg" width={58} height={40} alt="Sample Imageだよ" />
  </div>
  )
}