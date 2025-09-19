import {
  GithubOutlined,
  StarOutlined,
  ForkOutlined,
  EyeOutlined,
  CodeOutlined,
  TeamOutlined,
  CloudOutlined,
  AliwangwangOutlined,
} from '@ant-design/icons'

type TFeature = {
  key: string
  icon: React.ReactNode
  title: string
  description: string
  link?: string
}

export const FEATURES: TFeature[] = [
  {
    key: 'app',
    icon: <CodeOutlined />,
    title: '应用开发',
    description: '了解实践基础知识，开发自己的应用，完成整个链路的开发',
    link: '',
  },
  {
    icon: <TeamOutlined />,
    key: 'knowledge',
    title: '知识积累',
    description: '积累总结知识经验，分享知识，提升技能',
  },
  {
    icon: <CloudOutlined />,
    key: 'store',
    title: '代码仓库',
    description: '个人代码仓库，记录开发过程， 有需要的可以 clone',
  },
  {
    icon: <AliwangwangOutlined />,
    key: 'daily',
    title: '我的日常',
    description: '分享个人生活，以及自己的兴趣爱好，相同爱好可以相互交流',
  },
]

export const TOPICS = [
  {
    title: '应用开发',
    items: ['开源项目', '个人爱好'],
  },
  {
    title: '知识积累',
    items: ['基础知识', '个人博客'],
  },
  {
    title: '代码仓库',
    items: ['Github', 'Gitee'],
  },
  {
    title: '我的日常',
    items: ['兴趣爱好', '日常生活'],
  },
]
