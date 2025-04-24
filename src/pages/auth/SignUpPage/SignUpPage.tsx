import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'

const signUpFormSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpFormType = z.infer<typeof signUpFormSchema>

export function SignUpPage() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormType>()

  async function handleSignUp(data: SignUpFormType) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log(data)

      toast.success('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Reenviar',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch {
      toast.error('Erro ao cadastrar restaurante.')
    }
  }

  return (
    <div className="p-8">
      <Button variant={'ghost'} asChild className="absolute top-8 right-8">
        <Link to={'/sign-in'}>Fazer login</Link>
      </Button>
      <div className="flex w-[320px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta grátis
          </h1>
          <p className="text-muted-foreground text-sm">
            Seja um parceiro e comece suas vendas!
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="flex flex-col gap-4"
        >
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
            <Input
              id="restaurantName"
              type="text"
              {...register('restaurantName')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="managerName">Seu Nome</Label>
            <Input {...register('managerName')} id="managerName" type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input {...register('email')} id="email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Seu Celular</Label>
            <Input {...register('phone')} id="phone" type="tel" />
          </div>
          <Button disabled={isSubmitting} type="submit">
            Finalizar cadastro
          </Button>
          <p className="text-muted-foreground px-6 text-center text-sm leading-relaxed">
            Ao continuar, voçê concorda com nosso{' '}
            <a className="underline underline-offset-4" href="">
              termos de serviço
            </a>{' '}
            e{' '}
            <a className="underline underline-offset-4" href="">
              políticas de privacidade
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
