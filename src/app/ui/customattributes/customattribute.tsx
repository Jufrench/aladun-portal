'use client'

interface CustomAttributeProps {
  customAttribute: {
    value: string;
    definition: {
      name: string;
    }
  };
}

export default function CustomAttribute({ customAttribute }: CustomAttributeProps) {
  // console.log('%cattributes props:', 'color:deepskyblue', customAttribute)
  const { value } = customAttribute;
  const { name } = customAttribute.definition;
  // const { hi } = value;
  return (
    <li>{name}: {value}</li>
  )
}