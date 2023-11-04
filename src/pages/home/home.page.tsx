import { useQuery } from "@tanstack/react-query"
import { Footer } from "../../components"
import { Contact, Hero, Services } from "./components"
import { getContents } from "../../client/contents"

type TContentData = Array<{
  id: string
  key: string
  value: string
  createdAt: string
  updatedAt?: string
  deletedAt?: string
  archived: boolean
}>

export const Home = () => {
  const { data: contentData, isError, isLoading } = useQuery({ queryKey: ['contents'], queryFn: getContents })

  const handleHeroContents = (content: TContentData) => {
    if (!content) return
    const heroValues = content?.filter(e => e.key.toLocaleLowerCase().includes('hero'))
    const heroContent = {
      title: heroValues.find(e => e.id === '4e4bc556-c104-4e73-8c39-4fbf4bcef683')?.value,
      subtitle: heroValues.find(e => e.id === '1eb490ce-08cc-4935-ad32-1d0a3e828d5a')?.value,
      description: heroValues.find(e => e.id === 'd1a78703-1ea7-4568-998d-bc00e1dd4a37')?.value,
      primaryButtonText: heroValues.find(e => e.id === 'a85c5f91-b122-4af6-b777-650730cce01e')?.value,
      secondaryButtonText: heroValues.find(e => e.id === '2748a9a1-f121-404b-9050-3430a7168e3b')?.value,
    }
    return heroContent
  }

  if (isLoading) return null

  if (isError) return <div>Error</div>

  return (
    <>
      <Hero {...handleHeroContents(contentData.contents)} />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}