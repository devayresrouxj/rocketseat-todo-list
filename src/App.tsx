import Text from './components/text'
import Icon from './components/icon'
import TrashIcon from './assets/icons/trash.svg?react'
import CheckIcon from './assets/icons/check.svg?react'
import PencilIcon from './assets/icons/pencil.svg?react'
import PlusIcon from './assets/icons/plus.svg?react'
import SpinnerIcon from './assets/icons/spinner.svg?react'
import XIcon from './assets/icons/x.svg?react'

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-2">
        <Text variant={'body-sm-bold'} className="text-pink-base">
          Olá Mundo!
        </Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} />
        <Icon svg={CheckIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={XIcon} />
      </div>
    </div>
  )
}
