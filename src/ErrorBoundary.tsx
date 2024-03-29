//参考：https://zenn.dev/longbridge/articles/0c7c9ce5c60487
import React, { ErrorInfo, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  public static getDerivedStateFromError(error: Error) {
    console.log('getDerivedStateFromError', error)
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('componentDidCatch', error, errorInfo)
    return { hasError: true }
  }

  public render() {
    const { hasError } = this.state
    const { children } = this.props
    return hasError ? <h1>エラーが発生しました</h1> : children
  }
}
export default ErrorBoundary
