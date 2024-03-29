import React from 'react'
import { Select } from 'antd'
import { useAtom } from 'jotai'
import { selectedAtom, selectedDataAtom } from '../state'
import styled from 'styled-components'

const { Option } = Select

const Container = styled.div`
  width: 200px;

  @media (max-width: 640px) {
    margin: 0 auto;
  }
`

const SearchSelect = () => {
  const [data] = useAtom(selectedDataAtom)
  const [, setSelected] = useAtom(selectedAtom)

  const onChange = (value) => {
    setSelected(value)
  }

  return (
    <Container>
      <Select
        style={{ width: 200 }}
        showSearch
        placeholder="Välj kommun"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        options={data
          .filter((d) => d.name)
          .map((d) => ({
            value: d.name,
          }))}
      />
    </Container>
  )
}

export default SearchSelect
