package no.nrk.core.icons

import android.os.Bundle
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Icon
import androidx.compose.material3.Switch
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            var useExpressive by remember { mutableStateOf(false) }

            CompositionLocalProvider(LocalUseExpressiveIcons provides useExpressive) {
                Column(
                    modifier = Modifier
                        .padding(24.dp)
                ) {
                    Switch(checked = useExpressive, onCheckedChange = { useExpressive = !useExpressive} )

                    Spacer(Modifier.size(16.dp))

                    Row(
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Icon(
                            painter = NrkIcons.NrkLogout.asPainter(),
                            contentDescription = null,
                            modifier = Modifier.size(96.dp)
                        )

                        Icon(
                            painter = NrkIcons.NrkMediaPlay.asPainter(),
                            contentDescription = null,
                            modifier = Modifier.size(96.dp)
                        )

                        Icon(
                            painter = NrkIcons.NrkHeart.asPainter(),
                            contentDescription = null,
                            modifier = Modifier.size(96.dp)
                        )
                    }
                }
            }
        }
    }
}

// It's unlikely that this changes on most screens, so it's probably a bit more efficient to use staticCompositionLocalOf here, right?
val LocalUseExpressiveIcons = staticCompositionLocalOf<Boolean> {
    error("LocalUseExpressiveIcons not found")
}

@Composable
fun NrkIcon.asPainter(): Painter {
    return painterResource(
        id = if (LocalUseExpressiveIcons.current) {
            expressive
        } else {
            normal
        }
    )
}
