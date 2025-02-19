'use client'
import { Button } from "@/components/buttons/button";
import { InputRoot, InputIcon, InputField } from "@/components/input/input";
import { User, Mail, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeToEvent } from "@/http/api";
import { useRouter, useSearchParams } from "next/navigation";

const subscriptionSchema = z.object({
    name: z.string().min(2, "Nome muito curto"),
    email: z.string().email("E-mail inválido"),
});
type Subscription = z.infer<typeof subscriptionSchema>;

export function UserForm(){
    const router = useRouter();
    const searchParams = useSearchParams();

    const { register, handleSubmit, formState: {errors} } = useForm<Subscription>({
        resolver: zodResolver(subscriptionSchema),
    });
    async function onSubmit({name, email}: Subscription){
        const referrer = searchParams.get("referrer");
        const {subscriberId} = await subscribeToEvent({name, email, referrer});

        router.push(`/invite-page/${subscriberId}`);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-700 border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
          <h2 className="text-xl font-heading font-semibold text-gray-200">
            Inscrição
          </h2>

          <div className="space-y-3">
           
           <div className="space-y-2">
                <InputRoot>
                    <InputIcon>
                        <User size={20} />
                    </InputIcon>
                    <InputField  {...register("name")} placeholder="Nome completo" type="text"/>
                </InputRoot>

                {errors.name && <p className="text-danger text-sm">{errors.name.message}</p>}

           </div>
           
            <div className="space-y-2">
                <InputRoot>
                <InputIcon>
                    <Mail size={20} />
                </InputIcon>
                <InputField {...register("email")} placeholder="E-mail" type="email" />
                </InputRoot>

                {errors.email && <p className="text-danger text-sm">{errors.email.message}</p>}

            </div>

            <Button type="submit">
              Confirmar
              <ArrowRight size={20} />
            </Button>
          </div>

        </form>
    );
}