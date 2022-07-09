package io.gitlab.arturbosch.detekt.rules.style

import io.gitlab.arturbosch.detekt.api.Config
import io.gitlab.arturbosch.detekt.test.assertThat
import io.gitlab.arturbosch.detekt.test.compileAndLint
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test

class MultilineRawStringIndentationSpec {
    val subject = MultilineRawStringIndentation(Config.empty)

    @Nested
    inner class IfTheOpeningDoesNotStartTheLine {
        @Test
        fun `raise multiline raw string without indentation`() {
            val code = """
                val a = $TQ
                Hello world!
                $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .hasSize(1)
                .hasSourceLocation(2 to 1, 2 to 13)
                .hasTextLocations("Hello world!")
        }

        @Test
        fun `raise multiline raw strings without indentation`() {
            val code = """
                val a = $TQ
                Hello world!
                How are you?
                $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .hasSize(2)
                .hasTextLocations("Hello world!", "How are you?")
        }

        @Test
        fun `raise multiline raw strings without right indentation`() {
            val code = """
                val a = $TQ
                 Hello world!
                    How are you?
                $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .hasSize(1)
                .hasSourceLocation(2 to 2, 2 to 14)
                .hasTextLocations("Hello world!")
        }

        @Test
        fun `raise multiline raw strings with too much indentation`() {
            val code = """
                val a = $TQ
                     Hello world!
                     How are you?
                $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .hasSize(1)
                .hasSourceLocation(2 to 5, 3 to 18)
                .hasTextLocations(" Hello world!\n     How are you?")
        }

        @Test
        fun `don't raise multiline raw strings if one has correct indentation and the other more`() {
            val code = """
                val a = $TQ
                      Hello world!
                    How are you?
                $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .isEmpty()
        }

        @Test
        fun `don't raise multiline raw strings if all have the correct indentation`() {
            val code = """
                val a = $TQ
                    Hello world!
                    
                    How are you?
                $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .isEmpty()
        }

        @Test
        fun `don't raise multiline raw strings if all have the correct indentation or empty`() {
            val code = """
                val a = $TQ
                    Hello world!
                
                    How are you?
                $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .isEmpty()
        }

        @Test
        fun `raise multiline raw strings if a blank line doesn't have the minimum indentation`() {
            val code = """
                val a = $TQ
                    Hello world!
                  
                $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .hasSize(1)
                .hasSourceLocation(3 to 1, 3 to 3)
        }

        @Test
        fun `raise multiline raw strings with indentation on closing`() {
            val code = """
                val a = $TQ
                    Hello world!
                    How are you?
                    $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .hasSize(1)
                .hasSourceLocation(4 to 1, 4 to 5)
        }
    }

    @Nested
    inner class IfTheOpeningStartTheLine {
        @Test
        fun `raise multiline raw string without indentation`() {
            val code = """
                val a = 
                    $TQ
                    Hello world!
                    $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .hasSize(1)
                .hasSourceLocation(3 to 5, 3 to 17)
        }

        @Test
        fun `raise multiline raw strings without indentation`() {
            val code = """
                val a = 
                    $TQ
                    Hello world!
                    How are you?
                    $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .hasSize(2)
        }

        @Test
        fun `raise multiline raw strings without right indentation`() {
            val code = """
                val a = 
                    $TQ
                     Hello world!
                        How are you?
                    $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .hasSize(1)
                .hasSourceLocation(3 to 6, 3 to 18)
        }

        @Test
        fun `raise multiline raw strings with too much indentation`() {
            val code = """
                val a =
                    $TQ
                         Hello world!
                         How are you?
                    $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .hasSize(1)
                .hasSourceLocation(3 to 9, 4 to 22)
                .hasTextLocations(" Hello world!\n         How are you?")
        }

        @Test
        fun `don't raise multiline raw strings if one has correct indentation and the other more`() {
            val code = """
                val a = 
                    $TQ
                          Hello world!
                        How are you?
                    $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .isEmpty()
        }

        @Test
        fun `don't raise multiline raw strings if all have the correct indentation`() {
            val code = """
                val a = 
                    $TQ
                        Hello world!
                        How are you?
                    $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .isEmpty()
        }

        @Test
        fun `raise multiline raw strings with too much indentation on closing`() {
            val code = """
                val a = 
                    $TQ
                        Hello world!
                        How are you?
                        $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .hasSize(1)
                .hasSourceLocation(5 to 5, 5 to 9)
        }

        @Test
        fun `raise multiline raw strings with too little indentation on closing`() {
            val code = """
                val a = 
                    $TQ
                        Hello world!
                        How are you?
                  $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .hasSize(1)
                .hasSourceLocation(5 to 3, 5 to 6)
        }
    }

    @Nested
    inner class CasesThatShouldBeIgnored {
        @Test
        fun `doesn't raise multiline raw strings without trim`() {
            val code = """
                val a = $TQ
                Hello world!
                $TQ
            """
            subject.compileAndLint(code)
            assertThat(subject.findings).isEmpty()
        }

        @Test
        fun `don't raise one line raw strings`() {
            val code = """
                val a = ${TQ}Hello world!$TQ
            """
            subject.compileAndLint(code)
            assertThat(subject.findings).isEmpty()
        }

        @Test
        fun `doesn't raise if it is not a raw string`() {
            val code = """
                val a = "Hello world!"
            """
            subject.compileAndLint(code)
            assertThat(subject.findings).isEmpty()
        }

        @Test
        fun `don't raise if it contains content after the opening triple quote`() {
            val code = """
                val a = ${TQ}Hello world!
                    How are you?
                $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .isEmpty()
        }

        @Test
        fun `don't raise if it contains content before the closing triple quote`() {
            val code = """
                val a = $TQ
                    Hello world!
                    How are you?$TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .isEmpty()
        }

        @Test
        fun `don't raise if it isEmpty`() {
            val code = """
                val a = $TQ
                $TQ.trimIndent()
            """
            subject.compileAndLint(code)
            assertThat(subject.findings)
                .isEmpty()
        }
    }
}

private const val TQ = "\"\"\""
