# Spec Kit Setup Notes

이 저장소는 공식 `specify init --here --ai codex --script ps`로 초기화되었습니다.

추가로 다음 프로젝트 제약을 반영했습니다.
- `AGENTS.md` 기준의 제품/품질/SEO 원칙을 헌장과 템플릿 오버라이드에 반영
- 한국어 MBTI 스타일 테스트용 초기 스펙 초안 생성
- 기존 로컬 스킬 자산은 `skills/` 경로로 유지

현재 핵심 파일:
- `.specify/memory/constitution.md`
- `.specify/specs/001-korean-mbti-test/spec.md`
- `.specify/specs/001-korean-mbti-test/plan.md`
- `.specify/specs/001-korean-mbti-test/tasks.md`
- `.specify/templates/overrides/*.md`

권장 사용 순서:
1. 헌장 보강
2. 기능 스펙 구체화
3. 구현 계획 작성
4. 작업 분해
5. 구현 및 검증

참고:
- 이 저장소는 Windows PowerShell 기준으로 초기화되었으므로 `.specify/scripts/powershell` 스크립트를 사용합니다.
- Codex에서 spec-kit 프롬프트는 `.codex/prompts/`에 생성되었습니다.
