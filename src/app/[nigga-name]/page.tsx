import { Metadata } from "next"

type Props = {
    params : { niggaName: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise<string> (resolve => {
        setTimeout(() => {
            resolve(params.niggaName)
        },100)
    });
    return { title };
};

export default function NiggaName({ params } : Props){
    return <h1> Nigga Name 🦍 </h1>
}
