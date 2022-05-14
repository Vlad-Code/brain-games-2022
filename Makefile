install:
		npm ci
brain-games-2022:
		node bin/brain-games.js
publish:
		npm publish --dry-run		
lint:
		npx eslint .