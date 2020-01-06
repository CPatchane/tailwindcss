export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.overscroll-auto': { 'overscroll-behavior': 'auto' },
        '.overscroll-contain': { 'overscroll-behavior': 'contain' },
        '.overscroll-none': { 'overscroll-behavior': 'none' },
      },
      variants('overscroll')
    )
  }
}
