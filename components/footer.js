import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  // Thanks to{' '} <Link href="https://www.craftz.dog/">Takuyama Matsuyama</Link>
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Damien Mathieu. All Rights Reserved.
    </Box>
  )
}

export default Footer
