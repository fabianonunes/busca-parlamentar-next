import Link from 'next/link'

import { Flex, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <Flex p={6} justify="center" mt={4}>
      <Text mx="auto" fontSize="sm">
        Feito por{' '}
        <Link passHref href="http://github.com/sethwololo">
          <Text as="a" fontWeight="bold">
            sethwololo
          </Text>
        </Link>{' '}
        com 💚
      </Text>
    </Flex>
  )
}
