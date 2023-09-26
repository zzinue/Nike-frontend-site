const ShoeCard = ({imgURL,changeBigShoeImage,bigShoeImg}) => {
const handleClick=() => {
if(bigShoeImg !== imgURL.tumbnail){
    changeBigShoeImage(imgURL.tumbnail)
}
}
  return (
<div className={`border-2 rounded-xl
${bigShoeImg===imgURL
? 'border-coral-red'
: 'border-transparent'} cursor-pointer max-sm:flex-1` } onClick={handleClick}>
    <div>
        <img src={imgURL.bigShoe}
        alt="shoe collection"
        width={127}
        height={103}
        className="object-contain"/>
    </div>
</div>
  )
}

export default ShoeCard