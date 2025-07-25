import Container from "@/app/components/common/Container"
import LegalMentionItems from "@/app/components/display/LegMention"
import { legalmention1 } from "@/data.global"
import { legalmention0 } from "@/data.global"


export default function LegalMentionPage(){
    return(
        <Container>
            <div className="py-8 space-y-10 md:space-y-14">
                {legalmention0.map(( items, id ) => (
                    <LegalMentionItems
                            key={id}
                            left={items}
                            right={legalmention1[id] }
                        />
                ))}
            </div>
        </Container>
    )
}