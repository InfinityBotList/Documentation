import Container from './Container';

export default function V4() {
  return (
    <Container className="p-1">
      <h2 className="text-semibold text-xl">Hey there!</h2>
      <p>
        If you want to play with the upcoming IBL v4 API, check out the{' '}
        <a
          className="text-blue-0"
          href="https://spider.infinitybotlist.com/docs"
        >
          IBL v4 docs
        </a>
      </p>
    </Container>
  );
}
