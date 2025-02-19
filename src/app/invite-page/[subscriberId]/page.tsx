import Image from "next/image";
import logo from "../../../assets/logo.svg";
import gold from "../../../assets/medal-gold.svg";
import silver from "../../../assets/medal-silver.svg";
import cooper from "../../../assets/medal-cooper.svg";
import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";
import { StatsCard, StatsData, StatsDescription } from "@/components/statsCard/statsCard";
import { InviteLinkInput } from "./invite-link-input";
import { getRanking, getSubscriberInviteClicks, getSubscriberInviteCount, getSubscriberRankingPosition } from "@/http/api";

interface InvitePageProps {
    params: Promise<{subscriberId: string}>;
}

export default async function InvitePage(props: InvitePageProps) {
    const { subscriberId } = await props.params;
    const link = `http://localhost:3333/invites/${subscriberId}`;
    const {count : linksCount} = await getSubscriberInviteClicks(subscriberId);
    const {count: invitesCount} = await getSubscriberInviteCount(subscriberId);
    const {position: rankinkPosition} = await getSubscriberRankingPosition(subscriberId);
    const {ranking} = await getRanking();
    return (
        <>
        <div className="min-h-dvh flex items-center justify-center gap-16 flex-col md:flex-row">
            <div className="flex flex-col gap-10 w-full max-w-[550px]">
                <Image src={logo} alt="devstage logo" className="h-[30px] w-[108.5px]" />
                <div className="space-y-2">
                    <h1 className="text-4xl text-gray-100 leading-none font-heading font-semibold">
                        Inscrição confirmada!
                    </h1>
                    <p className="text-gray-200">
                    Para entrar no evento, acesse o link enviado para seu e-mail.
                    </p>
                </div>
                <div className="space-y-6">
                    <div className="space-y-3">	
                        <h2 className="text-xl text-gray-100 leading-none font-heading font-semibold">
                        Indique e Ganhe
                        </h2>
                        <p className="text-gray-200">
                        Convide mais pessoas para o evento e concorra a prêmios exclusivos! É só compartilhar o link abaixo e acompanhar as inscrições:
                        </p>
                    </div>
                    
                    <InviteLinkInput link={link}/>

                    <div className="grid gap-3 md:grid-cols-3">
                        <StatsCard>
                            <MousePointerClick className="absolute text-purple size-5 top-2 left-2"/>
                            <StatsData>{linksCount}</StatsData>
                            <StatsDescription>Acessos ao link</StatsDescription>
                        </StatsCard>

                        <StatsCard>
                            <BadgeCheck className="absolute text-purple size-5 top-2 left-2"/>
                            <StatsData>{invitesCount}</StatsData>
                            <StatsDescription>Inscrições feitas</StatsDescription>
                        </StatsCard>

                        <StatsCard>
                            <Medal className="absolute text-purple size-5 top-2 left-2"/>
                            <StatsData>{
                            rankinkPosition ? `${rankinkPosition}º` : "-"
                            }</StatsData>
                            <StatsDescription>Posição no ranking</StatsDescription>
                        </StatsCard>
                    </div>

                </div>
            </div>
            <div className="flex flex-col space-y-4 w-full max-w-[450px]">
                <h2 className="text-xl font-heading font-semibold text-gray-100">
                Ranking de indicações
                </h2>
                <div className="space-y-4">
                    {
                        ranking.map((item, index) => {
                            let position = index + 1;
                            return (
                                <div key={item.id} className="relative flex flex-row p-6 bg-gray-700 rounded-xl w-full border border-gray-600">
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold text-gray-300">{position}° | {item.name}</span>
                                    <span className="text-xl font-heading font-semibold text-gray-200">{item.score}</span>
                                </div>

                                {position === 1 && <Image src={gold} alt="Gold medal" className="absolute top-0 right-8"/>}
                                {position === 2 && <Image src={silver} alt="Silver medal" className="absolute top-0 right-8"/>}
                                {position === 3 && <Image src={cooper} alt="Cooper medal" className="absolute top-0 right-8"/>}
                            
                            </div>
                            )
                        })
                    }
                   
                </div>
            </div>
        </div>
        </>
    );
}