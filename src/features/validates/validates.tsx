export const   required=(value:any)=>{
    if (!value) return 'Field is required'
    return undefined
}
export const maxLengthCreator=(max:any)=>(value:any)=>{
    if (value&&value.length>max) return `Max length is ${max} symbols`
    return undefined
}