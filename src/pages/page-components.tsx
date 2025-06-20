import Text from '../components/text'
import Icon from '../components/icon'
import TrashIcon from '../assets/icons/trash.svg?react'
import CheckIcon from '../assets/icons/check.svg?react'
import PencilIcon from '../assets/icons/pencil.svg?react'
import PlusIcon from '../assets/icons/plus.svg?react'
import SpinnerIcon from '../assets/icons/spinner.svg?react'
import XIcon from '../assets/icons/x.svg?react'
import Badge from '../components/badge'
import Button from '../components/button'
import ButtonIcon from '../components/button-icon'
import InputText from '../components/input'
import InputCheckbox from '../components/input-checkbox'
import Card from '../components/card'
import { Container } from '../components/container'
import Skeleton from '../components/skeleton'

export default function PageComponents() {
  return (
    <Container>
      <div className="grid gap-10">
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

        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova tarefa</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <div>
          <Card size="md">Olá Mundo</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
    </Container>
  )
}
