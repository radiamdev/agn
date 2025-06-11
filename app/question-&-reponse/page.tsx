import Header from "../components/layout/Header"
import Hero from "../components/common/section/quest&rep/Hero"
import QuestAns from "../components/common/section/quest&rep/Quest&Ans"
import QuestAns1 from "../components/common/section/quest&rep/Quest&Ans1"
import QuestAns2 from "../components/common/section/quest&rep/Quest&Ans2"
import QuestAns3 from "../components/common/section/quest&rep/Quest&Ans3"
import QuestAns4 from "../components/common/section/quest&rep/Quest&Ans4"
import Footer from "../components/layout/Footer"

export default function QuestionRep() {
    return(
        <main>
            <Hero/>
            <QuestAns/>
            <QuestAns1/>
            <QuestAns2/>
            <QuestAns3/>
            <QuestAns4/>
        </main>
    )
}