'use client'
import { Button } from 'antd'

export default function AppItem({
  params,
}: {
  params: { title: string; description: string; link: string; icon: string }
}) {
  // 跳转到指定的网页
  const turnToLink = () => {
    window.open(params.link, '_blank')
  }

  return (
    <main
      className={`flex flex-col bg-cover w-[30%]  border-radius-[8px] rounded-[8px] border-[#E3E8F4] hover:cursor-pointer border-[1px] hover:border-[#1890ff] pl-[24px] pr-[24px] pt-[48px] pb-[48px]`}
      style={{ backgroundImage: `url('${params.icon}')` }}
      onClick={turnToLink}
    >
      <section className="mb-[32px]">
        <h3>{params.title}</h3>
        <p>{params.description}</p>
      </section>
      <section>
        <Button type="primary" onClick={turnToLink}>
          立即前往
        </Button>
      </section>
    </main>
  )
}
