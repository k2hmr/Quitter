import { Select } from '@chakra-ui/react'

type sProps = {
  name: string
  options: Array<{ value: number | string; label: string }>
  setValue: (value: string) => void
}

export const SelectOptions: React.FC<sProps> = ({
  name,
  options,
  setValue,
}) => (
  <Select
    name={name}
    placeholder="Select option"
    onChange={(e) => setValue(e.target.value)}
  >
    {options.map((option, i) => (
      <option key={i} value={option.value}>
        {option.label}
      </option>
    ))}
  </Select>
)
