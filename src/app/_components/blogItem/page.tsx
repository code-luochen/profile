'use client'

import { Button } from 'antd'

export default function BlogItem() {
  return (
    <main
      className={`flex justify-between bg-cover w-[27%]  border-radius-[8px] rounded-[8px] border-[#E3E8F4] hover:cursor-pointer border-[1px] hover:border-[#1890ff] pl-[24px] pr-[24px] pt-[30px] pb-[30px]`}
    >
      <section className="mr-[30px] w-[100px] h-[100px]">
        <img src="/bg.png" alt="logo" className="w-[100%] h-[100%]" />
      </section>

      <section className="overflow-hidden white-space-nowrap text-ellipsis">
        <h3 className="text-[24px] font-bold fontfamily-[PingFangSC] overflow-hidden text-ellipsis whitespace-nowrap">
          稀土掘金
        </h3>

        <section className="mt-[25px] flex justify-end">
          <Button type="primary">点击跳转</Button>
        </section>
      </section>
    </main>
  )
}
