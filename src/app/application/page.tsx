import AppItem from '../_components/appItem/page'

export default function MyApp() {
  return (
    <main className="flex flex-wrap gap-4 w-full justify-between">
      {[1, 2, 3, 4, 5, 6].map((item) => {
        return (
          <AppItem
            key={item}
            params={{
              title: 'Application',
              icon: '/bg.png',
              description: 'This is a application',
              link: 'https://www.baidu.com',
            }}
          />
        )
      })}
    </main>
  )
}
