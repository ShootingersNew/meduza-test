import NavigationService from '../NavigationService'
import type { Router } from 'vue-router'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

describe('NavigationService', () => {
  let originalRouter: any
  let mockRouter: Partial<Router>

  beforeEach(() => {
    originalRouter = window.router
    mockRouter = {
      push: vi.fn(),
      replace: vi.fn(),
      go: vi.fn(),
      currentRoute: { value: { path: '/test', query: { foo: 'bar' } } } as any,
    }
    window.router = mockRouter as Router
  })

  afterEach(() => {
    window.router = originalRouter
  })

  it('should navigate using router.push', () => {
    NavigationService.navigate('/foo')
    expect(mockRouter.push).toHaveBeenCalledWith('/foo')
  })

  it('should replace using router.replace', () => {
    NavigationService.replace('/bar')
    expect(mockRouter.replace).toHaveBeenCalledWith('/bar')
  })

  it('should go back using router.go', () => {
    NavigationService.goBack()
    expect(mockRouter.go).toHaveBeenCalledWith(-1)
  })

  it('should get current path from router', () => {
    expect(NavigationService.getCurrentPath()).toBe('/test')
  })

  it('should get query from router', () => {
    expect(NavigationService.getQuery()).toEqual({ foo: 'bar' })
  })

  it('should detect router availability', () => {
    expect(NavigationService.isRouterAvailable()).toBe(true)
  })
})
