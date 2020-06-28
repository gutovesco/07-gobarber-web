import { renderHook } from "@testing-library/react-hooks"
import { useAuth, AuthProvider } from '../../hooks/AuthContext'
import MockAdapter from 'axios-mock-adapter'
import api from '../../services/api'

const apiMock = new MockAdapter(api)

describe('Auth hooks', () => {
    it('should be able to sign in', async () => {
        apiMock.onPost('sessions').reply(200, {
            user: {
                id: 'user123',
                name: 'John doe',
                email: 'johndoe@example.com'
            },
            token: 'token-123'
        })

        const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')

        const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
            wrapper: AuthProvider
        })

        result.current.signIn({
            email: 'johndoe@example.com',
            password: '123456'
        })

        await waitForNextUpdate();

        expect(setItemSpy).toHaveBeenCalledTimes(2)
        expect(result.current.user.email).toEqual('johndoe@example.com')
    })

    it('should restore saved data from storage when auth inits', () => {
        jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
            switch (key) {
                case '@GoBarber:token':
                    return 'token-123'
                case '@GoBarber:user':
                    return JSON.stringify({
                        id: 'user123',
                        name: 'John doe',
                        email: 'johndoe@example.com'
                    });
                default:
                    return null;
            }
        })
    })
})